/*!
 * minQuery
 */

window.onload = function(){
  miniQuery("a")
};

var SweetSelector = {
  select: function(element) {
    switch(element[0]){
      case "#":
        var searchElement = element.slice(1,element.length);
        return [document.getElementById(searchElement)];
      case".":
        var searchElement = element.slice(1,element.length);
        return document.getElementsByClassName(searchElement);
      default:
        return document.getElementsByTagName(element);
    };
  }
};

var DOM = {
  hide: function(element){
    stylingElement = SweetSelector.select(element)
    for(var i = 0; i < stylingElement.length; ++i){
      stylingElement[i].style.display = "none"
    };
  },
  show: function(element){
    stylingElement = SweetSelector.select(element)
    for(var i = 0; i < stylingElement.length; ++i){
      stylingElement[i].style.display = "block"
    };
  },
  addClass: function(element, className){
    stylingElement = SweetSelector.select(element)
    for(var i = 0; i < stylingElement.length; ++i){
      preClass = stylingElement[i].getAttribute('class')
      stylingElement[i].setAttribute("class", preClass +" "+ className)
    };
  },
  // next work on removing class!!!
  removeClass: function(element, className){
    stylingElement = SweetSelector.select(element)
    for(var i = 0; i < stylingElement.length; ++i){
      preClass = stylingElement[i].getAttribute('class').split(" ")
      postion = preClass.indexOf(className)
      preClass[postion] = ''
      preClass = preClass.join(" ").trim();
      stylingElement[i].setAttribute("class", preClass)
    };
  }

}

var EventDispatcher = {
  on: function(element, action, instruction){
    var event = document.createEvent('Event');
    event.initEvent(action,true,true);
    var elemList = SweetSelector.select(element);
    for (var i =0; i< elemList.length;++i){
      elemList[i].addEventListener(action, instruction, false);
    }
  },
  trigger: function(element, action){
    var event = document.createEvent('Event');
    event.initEvent(action,true,true);
    var elemList = SweetSelector.select(element);
    for (var i =0; i< elemList.length;++i){
      elemList[i].dispatchEvent(event);
    }
  }
}

var AjaxWrapper = {
  request: function(urlTypeObject) {
    // return XMLHttpRequest(urlTypeObject.type, urlTypeObject.url);

    // Creating a promise
    var promise = new Promise( function (resolve, reject) {

      // Instantiates the XMLHttpRequest
      var client = new XMLHttpRequest();
      var uri = urlTypeObject.url;

      if (urlTypeObject.data && (urlTypeObject.type === 'POST' || urlTypeObject.type === 'PUT')) {
        uri += '?';
        var argcount = 0;
        for (var key in urlTypeObject.data) {
          if (urlTypeObject.data.hasOwnProperty(key)) {
            if (argcount++) {
              uri += '&';
            }
            uri += encodeURIComponent(key) + '=' + encodeURIComponent(urlTypeObject.data[key]);
          }
        }
      }

      client.open(urlTypeObject.type, uri, true);
      client.send();

      client.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          // Performs the function "resolve" when this.status is equal to 2xx
          resolve(this.response);
        } else {
          // Performs the function "reject" when this.status is different than 2xx
          reject(this.statusText);
        }
      };
      client.onerror = function () {
        reject(this.statusText);
      };
    });

    // Return the promise
    return promise;
  }
}

var miniQuery = function(theThings){
  executables{
    DOM: DOM,
    EventDispatcher: EventDispatcher,
    AjaxWrapper: AjaxWrapper
  };
    return function(elem){
    dangerelem = elem
    something = SweetSelector.select(elem);
    debugger
    return
    }



}();
