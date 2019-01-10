/*
This api provide handle observers functions to apply it in event context
Created by: Maria Giraldo <mariagiraldo4@gmail.com>

Instance new ISubject interface

  subject = new ISubject()

Create the observer

  observer = new IObserver()

Register observer in ISubject with addObserver function.

Then must assign the notify function context in the IObserver object

And finally call to the notify function of ISubject object with custom paameters

- For destroy observer can call to removeObserver function of ISubject object

***********************************************************************************
Example: handle scroll event

First import file:

import Observers from '~/assets/observers.js'

subject = new Observers.ISubject()
observerScroll = new Observers.IObserver()
subject.addObserver(observerScroll, subject)
observerScroll.notify = scroll
subject.notify(observerScroll, document, 'scroll')

Destroy:
subject.removeObserver(observerScroll, subject)

// TODO:
Implement notification on ISubject for several observers for will improve the event topics

*/

'use strict'

/* Observer list collection object */
function ObserverList() {
  this.observerList = []
}

ObserverList.prototype.add = (object, observers) => {
  observers.observerList.push(object)
}

ObserverList.prototype.count = (observers) => {
  return observers.observerList.length
}

ObserverList.prototype.remove = (index, observers) => {
  observers.observerList.splice(index, 1)
}

ObserverList.prototype.getObject = (index, observers) => {
  return observers.observerList[index]
}

ObserverList.prototype.indexOf = function (object, observers) {
  for ( let i=0; i<this.observerList.length; i++ ) {
    if (observers.observerList[i] === object) return i;
  }
}

/* Subject interface */
function ISubject() { this.Observers = new ObserverList() }

ISubject.prototype.addObserver = (observer, subject) => {
  subject.Observers.add(observer, subject.Observers)
}

ISubject.prototype.removeObserver = (observer, subject) => {
  observer.removeListener()

  subject.Observers.remove(subject.Observers.observerList.indexOf(observer), subject.Observers)
}

/* Assign the event listener and concrete remove observer function */
ISubject.prototype.notify = function(observer, element, event) {

  return new Promise((resolv, reject) => {
    observer.addListener(element, event, observer.notify)
    resolv(event)
  })

  .then((event) => {
    observer.removeListener = () => {
      element.removeEventListener(event, observer.notify, {capture: true})
    }
  })

}

/* Observer interface */
function IObserver() {}

IObserver.prototype.notify = function(val) {
  // Implement in the concrete observer
}

IObserver.prototype.addListener = function(element, event, ctx) {
  element.addEventListener(event, ctx, {capture: true})
}

IObserver.prototype.removeListener = function(element, event, ctx) {
  // Asigned in the notify function
}

// Expose functions
export default {
  ISubject: ISubject,
  IObserver: IObserver
}
