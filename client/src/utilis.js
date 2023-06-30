import moment from "moment";
export const analyze = (text) => {
  if (text.includes("hi") || text.includes("hai") || text.includes("hello"))
    return "Hi, how can I help you?" ;
  else if (text.includes("date")) return moment().format("MMMM Do YYYY");
  else if (text.includes("time")) return moment().format("h: mm :ss a");
  else if (text.includes("javascript types")) return ("JavaScript has 8 Datatypes 1. String 2. Number 3. Bigint 4. Boolean 5. Undefined 6. Null 7. Symbol 8. Object" )
  else if (text.includes("javascript objects")) return ("In JavaScript, objects are king. If you understand objects, you understand JavaScript. In JavaScript, almost 'everything' is an object.Booleans can be objects (if defined with the new keyword). Numbers can be objects (if defined with the new keyword). Strings can be objects (if defined with the new keyword). Dates are always objects .Maths are always objects. Regular expressions are always objects. Arrays are always objects. Functions are always objects. Objects are always objects  All JavaScript values, except primitives, are objects.")
  else if (text.includes("javascript")) return "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS. "
  else if (text.includes("data")) return "A data structure is a storage format that defines the way data is stored, organized, and manipulated.Some popular data structures are Arrays, Trees, and Graphs."
  else if (text.includes("array")) return "An array is commonly referred to as a collection of items stored at contiguous memory locations.Items stored are of the same type.It organizes data so that a related set of values can be easily sorted or searched."
  else if (text.includes("angular")) return "Angular JS is an open source JavaScript framework that is used to build web applications. It can be freely used, changed and shared by anyone.Angular Js is developed by Google.It is an excellent framework for building single phase applications and line of business applications."
  else if (text.includes("django")) return "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source  ";
  else if (text.includes("react")) return "ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. It was initially developed and maintained by Facebook and later used in its products like WhatsApp & Instagram ";
  else if (text.includes("python")) return "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed."
  else if (text.includes("mern stack"))
    return "MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js front-end framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any front-end JavaScript framework can work.";
  else if (text.includes("thank you"))
    return "Thanks for contacting me! Have A great day!!";
  return "I can't get you. Can you rephrase the message";
};
