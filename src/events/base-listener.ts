import {Message, Stan} from 'node-nats-streaming';
import {Subjects} from './subjects';

interface Event {
    subject: Subjects;
    data: any;
}


export abstract class Listener<T extends Event> {
    abstract subject: T['subject'];
    abstract queuedGroupName: string;
    protected ackWait = 5 * 1000;
    protected client: Stan;

    protected constructor(client: Stan) {
        this.client = client;
    }

    abstract onMessage(data: T['data'], msg: Message): void;

    subscriptionOptions() {
        return this.client
            .subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queuedGroupName);
    }

    listen() {
        const subscription = this.client.subscribe(
            this.subject,
            this.queuedGroupName,
            this.subscriptionOptions()
        );

        subscription.on("message", (msg: Message) => {
            console.log(`Message received: ${this.subject} / ${this.queuedGroupName}`)

            const parsedData = this.parseMessage(msg);

            this.onMessage(parsedData, msg);
        })
    }

    parseMessage(msg: Message) {
        const data = msg.getData();
        return typeof data === 'string'
            ? JSON.parse(data)
            : JSON.parse(data.toString('utf8'));
    }
}
