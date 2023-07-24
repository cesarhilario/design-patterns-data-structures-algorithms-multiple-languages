import { EventService } from "./EventService";

const eventService = EventService.instance;

const eventSubscription = eventService.subscribe((event) => console.log(event));

eventService.emit("First Event");

EventService.instance.emit("Second Event");

eventSubscription.unsubscribe();

EventService.instance.emit("Third event"); // Will not emit
