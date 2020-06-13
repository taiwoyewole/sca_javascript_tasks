// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F

const example = {
    id: 0,
    name: "Example",
    email: "examples@you.edu",
    gender: "M",
  }
  
  // Write your intern objects here:
  
  const intern_1 = {
    id: 1,
    name: 'Mitzi',
    email: 'mmelloy0@psu.edu',
    gender: 'F',
  };
  
  const intern_2 = {
    id: 2,
    name: 'Kennan',
    email: 'kdiben1@tinypic.com',
    gender: 'M',
    speak: function() {
      return `Hello, my name is ${this.name}!`;
    }
  };
  
  const intern_3 = {
  id: 3,
  name: 'Keven',
  email: 'kmummery2@wikimedia.org',
  gender: 'M',
  };

  const intern_4 = {
    id: 4,
    name: 'Gannie',
    email: 'gmartinson3@illinois.edu',
    gender: 'M',
  };

  const intern_5 = {
    id: 5,
    name: 'Antonietta',
    email: 'gmartinson3@illinois.edu',
    gender: 'F',
    multiplyNums: function(a,b) {
      return a * b;
    }
  };

  // ==== Challenge 2: Reading Object Data ==== 
  // Once your objects are created, log out the following requests from HR into the console:
  
  // Mitzi's name
  console.log(intern_1.name);

  // Kennan's ID
  console.log(intern_2.id);

  // Keven's email
  console.log(intern_3.email);

  // Gannie's name
  console.log(intern_4.name);

  // Antonietta's Gender
  console.log(intern_5.gender);

  // ==== Challenge 3: Object Methods ==== 
  // Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
  // console.log(kennan.speak());
  console.log(intern_2.speak());
  
  // Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
  //console.log(antonietta.multiplyNums(3,4));
  console.log(intern_5.multiplyNums(3,4));
  