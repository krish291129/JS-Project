const questions = [
    {
        category: "Javascript",
        questions: [
            {
            question: "Which of the following is a correct way to declare a variable in JavaScript?",
            options: ["var x = 10" ,"variable x = 10","int x = 10", "let 10 = x"],
            correctAnswer: 0,
            },
            {
                question: "Which keyword is used to declare a constant variable in JavaScript?",
                options: ["var", "let", "const", "static"],
                correctAnswer: 2,
            },
            {
                question: "Which method is used to print something in the browser console?",
                options: ["console.print()", "console.write()", "console.log()", "print.console()"],
                correctAnswer: 2,
            },
            {
                question: "Which operator is used for strict equality comparison in JavaScript?",
                options: ["==", "===", "=", "!="],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a JavaScript data type?",
                options: ["Integer", "Float", "Boolean", "Double"],
                correctAnswer: 2,
            },
            {
                question: "How do you write a comment in JavaScript?",
                options: ["# This is a comment", "// This is a comment", "<!-- This is a comment -->", "/* This is a comment */"],
                correctAnswer: 1,
            },
            {
                question: "Which function is used to parse a string into an integer?",
                options: ["parseInteger()", "stringToInt()", "parseInt()", "toInteger()"],
                correctAnswer: 2,
            },
            {
                question: "Which built-in method removes the last element from an array?",
                options: ["pop()", "push()", "shift()", "unshift()"],
                correctAnswer: 0,
            },
            {
                question: "Which symbol is used for single-line comments in JavaScript?",
                options: ["#", "//", "/*", "<!--"],
                correctAnswer: 1,
            },
            {
                question: "What does the `typeof` operator return for `null`?",
                options: ["null", "undefined", "object", "string"],
                correctAnswer: 2,
            },
            {
                question: "Which statement is used to terminate a loop in JavaScript?",
                options: ["exit", "break", "return", "continue"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is NOT a JavaScript framework?",
                options: ["React", "Angular", "Vue", "Django"],
                correctAnswer: 3,
            },
            {
                question: "Which function is used to convert a JSON string into a JavaScript object?",
                options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "stringifyJSON()"],
                correctAnswer: 0,
            },
            {
                question: "What will `console.log(2 + '2')` output?",
                options: ["4", "22", "TypeError", "NaN"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a looping structure in JavaScript?",
                options: ["if", "switch", "for", "function"],
                correctAnswer: 2,
            },
            {
                question: "Which event occurs when the user clicks on an HTML element?",
                options: ["onmouseover", "onchange", "onclick", "onhover"],
                correctAnswer: 2,
            },
            {
                question: "Which method is used to round a number to the nearest integer?",
                options: ["Math.floor()", "Math.round()", "Math.ceil()", "Math.abs()"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a falsy value in JavaScript?",
                options: ["0", `"false"`, `"0"`, `"null"`],
                correctAnswer: 0,
            },
            {
                question: "How do you create a function in JavaScript?",
                options: ["function = myFunction()", "function myFunction()", "create function myFunction()", "def myFunction()"],
                correctAnswer: 1,
            },
            {
                question: "Which keyword is used to define a function expression in JavaScript?",
                options: ["func", "function", "def", "lambda"],
                correctAnswer: 1,
            },
            {
                question: "Which method is used to find the length of a string?",
                options: ["size()", "length()", "count()", "getSize()"],
                correctAnswer: 1,
            },
            {
                question: "How do you check if a variable `x` is an array in JavaScript?",
                options: ["x.isArray()", "Array.isArray(x)", "typeof x == 'array'", "x instanceof Array"],
                correctAnswer: 1,
            },
            {
                question: "Which built-in method converts an array to a string?",
                options: ["join()", "toString()", "concat()", "split()"],
                correctAnswer: 1,
            },
            {
                question: "Which statement is used to handle exceptions in JavaScript?",
                options: ["catch", "try-catch", "throw", "error"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a valid arrow function syntax?",
                options: ["(x) => { return x * x; }", "=> (x) { return x * x; }", "function(x) => { return x * x; }", "(x) -> { return x * x; }"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following will NOT return `true`?",
                options: ["Boolean(1)", "Boolean(0)", "!!'Hello'", "!![]"],
                correctAnswer: 1,
            }
        ]
    },
    {
        category: "Python",
        questions: [
            {
                question: "Which keyword is used to define a function in Python?",
                options: ["func", "define", "def", "lambda"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following is used to print output in Python?",
                options: ["echo()", "display()", "print()", "log()"],
                correctAnswer: 2,
            },
            {
                question: "Which data type is used to store a sequence of characters in Python?",
                options: ["int", "float", "string", "char"],
                correctAnswer: 2,
            },
            {
                question: "Which symbol is used for single-line comments in Python?",
                options: ["//", "#", "/*", "--"],
                correctAnswer: 1,
            },
            {
                question: "Which function is used to get the length of a string in Python?",
                options: ["size()", "length()", "len()", "count()"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following is NOT a valid variable name in Python?",
                options: ["my_var", "_myVar", "2myVar", "myVar2"],
                correctAnswer: 2,
            },
            {
                question: "Which function is used to convert a string into an integer?",
                options: ["parseInt()", "toInteger()", "int()", "strToInt()"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following is an immutable data type in Python?",
                options: ["list", "set", "tuple", "dictionary"],
                correctAnswer: 2,
            },
            {
                question: "What will `print(type(10))` output in Python?",
                options: ["<class 'integer'>", "<class 'int'>", "<type 'int'>", "<int>"],
                correctAnswer: 1,
            },
            {
                question: "Which operator is used for exponentiation in Python?",
                options: ["^", "**", "//", "^^"],
                correctAnswer: 1,
            },
            {
                question: "Which method is used to remove whitespace from the beginning and end of a string?",
                options: ["trim()", "strip()", "remove()", "clean()"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is NOT a valid loop in Python?",
                options: ["for", "while", "loop", "None of the above"],
                correctAnswer: 2,
            },
            {
                question: "Which function is used to read user input in Python?",
                options: ["readline()", "input()", "scan()", "get_input()"],
                correctAnswer: 1,
            },
            {
                question: "What will `print(2 + '2')` output in Python?",
                options: ["4", "22", "TypeError", "NaN"],
                correctAnswer: 2,
            },
            {
                question: "Which method is used to add an element to a list?",
                options: ["add()", "insert()", "append()", "push()"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following data types is mutable?",
                options: ["string", "tuple", "list", "int"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following is NOT a Python framework?",
                options: ["Django", "Flask", "Pandas", "React"],
                correctAnswer: 3,
            },
            {
                question: "Which function is used to open a file in Python?",
                options: ["open()", "readFile()", "loadFile()", "file.open()"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is NOT a valid Python data type?",
                options: ["list", "set", "map", "tuple"],
                correctAnswer: 2,
            },
            {
                question: "Which keyword is used to create a class in Python?",
                options: ["class", "struct", "object", "define"],
                correctAnswer: 0,
            },
            {
                question: "Which statement is used to handle exceptions in Python?",
                options: ["catch", "try-except", "throw", "handle"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a correct way to create an empty set?",
                options: ["set = {}", "set()", "emptySet()", "set([])"],
                correctAnswer: 1,
            },
            {
                question: "Which built-in function is used to sort a list in ascending order?",
                options: ["sort()", "sorted()", "order()", "arrange()"],
                correctAnswer: 1,
            },
            {
                question: "Which function is used to return the absolute value of a number?",
                options: ["abs()", "fabs()", "absolute()", "math.abs()"],
                correctAnswer: 0,
            }
        ]
    },
    {
        category: "DS",
        questions: [
            {
                question: "Which data structure follows the First In First Out (FIFO) principle?",
                options: ["Stack", "Queue", "Tree", "Graph"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a linear data structure?",
                options: ["Graph", "Tree", "Stack", "Heap"],
                correctAnswer: 2,
            },
            {
                question: "Which function is used to dynamically allocate memory in C?",
                options: ["malloc()", "alloc()", "new()", "create()"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is an example of a non-linear data structure?",
                options: ["Array", "Queue", "Linked List", "Tree"],
                correctAnswer: 3,
            },
            {
                question: "Which data structure uses LIFO (Last In First Out)?",
                options: ["Queue", "Stack", "Linked List", "Array"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following operations is performed in O(1) time complexity in a stack?",
                options: ["Insertion", "Deletion", "Searching", "Traversal"],
                correctAnswer: 0,
            },
            {
                question: "Which function is used to release dynamically allocated memory in C?",
                options: ["delete()", "free()", "remove()", "dealloc()"],
                correctAnswer: 1,
            },
            {
                question: "Which type of linked list allows traversal in both directions?",
                options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "None of the above"],
                correctAnswer: 1,
            },
            {
                question: "What is the worst-case time complexity of searching in a linked list?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                correctAnswer: 2,
            },
            {
                question: "Which data structure is best for implementing recursion?",
                options: ["Queue", "Stack", "Linked List", "Heap"],
                correctAnswer: 1,
            },
            {
                question: "Which sorting algorithm has the worst-case time complexity of O(n^2)?",
                options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
                correctAnswer: 2,
            },
            {
                question: "Which data structure is used to implement a priority queue?",
                options: ["Stack", "Linked List", "Heap", "Array"],
                correctAnswer: 2,
            },
            {
                question: "Which function is used to insert an element at the end of a linked list?",
                options: ["push()", "enqueue()", "append()", "insertEnd()"],
                correctAnswer: 3,
            },
            {
                question: "Which of the following searching algorithms has the best time complexity?",
                options: ["Linear Search", "Binary Search", "Hashing", "Jump Search"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following is NOT a sorting algorithm?",
                options: ["Insertion Sort", "Selection Sort", "Breadth-First Search", "Quick Sort"],
                correctAnswer: 2,
            },
            {
                question: "Which data structure is used for BFS (Breadth-First Search)?",
                options: ["Stack", "Queue", "Linked List", "Heap"],
                correctAnswer: 1,
            },
            {
                question: "What is the worst-case time complexity of Quick Sort?",
                options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following data structures supports fast O(1) lookup?",
                options: ["Array", "Linked List", "Hash Table", "Queue"],
                correctAnswer: 2,
            },
            {
                question: "Which traversal technique is used in a binary search tree (BST) to get sorted elements?",
                options: ["Pre-order", "In-order", "Post-order", "Level-order"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is the best case time complexity of Bubble Sort?",
                options: ["O(n^2)", "O(n log n)", "O(n)", "O(1)"],
                correctAnswer: 2,
            },
            {
                question: "Which data structure is commonly used in graph representation?",
                options: ["Array", "Stack", "Adjacency List", "Heap"],
                correctAnswer: 2,
            },
            {
                question: "What is the maximum number of children a binary tree node can have?",
                options: ["1", "2", "3", "Any number"],
                correctAnswer: 1,
            },
            {
                question: "Which searching algorithm works only on sorted arrays?",
                options: ["Linear Search", "Binary Search", "Breadth-First Search", "Depth-First Search"],
                correctAnswer: 1,
            },
            {
                question: "Which data structure is used for function call management in C?",
                options: ["Queue", "Heap", "Stack", "Linked List"],
                correctAnswer: 2,
            }
        ]
    },
    {
        category: "DBMS",
        questions: [
            {
                question: "Which of the following is a type of database model?",
                options: ["Hierarchical", "Linear", "Non-Structured", "Sorted"],
                correctAnswer: 0,
            },
            {
                question: "Which SQL command is used to retrieve data from a database?",
                options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is a property of a transaction in DBMS?",
                options: ["Atomicity", "Durability", "Isolation", "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "Which key uniquely identifies a record in a table?",
                options: ["Foreign Key", "Candidate Key", "Primary Key", "Composite Key"],
                correctAnswer: 2,
            },
            {
                question: "Which normal form eliminates partial dependency?",
                options: ["1NF", "2NF", "3NF", "BCNF"],
                correctAnswer: 1,
            },
            {
                question: "Which type of join returns only matching rows from both tables?",
                options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
                correctAnswer: 0,
            },
            {
                question: "What does SQL stand for?",
                options: ["Structured Query Language", "Standard Query Language", "System Query Logic", "Sequential Query Language"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is NOT a type of database?",
                options: ["Relational", "Hierarchical", "Network", "Linear"],
                correctAnswer: 3,
            },
            {
                question: "Which of the following commands is used to remove a table from a database?",
                options: ["DROP", "DELETE", "REMOVE", "CLEAR"],
                correctAnswer: 0,
            },
            {
                question: "Which SQL constraint ensures that a column cannot have NULL values?",
                options: ["UNIQUE", "NOT NULL", "CHECK", "DEFAULT"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a NoSQL database?",
                options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
                correctAnswer: 1,
            },
            {
                question: "What is the full form of ACID in DBMS?",
                options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Data", "Automated, Configured, Indexed, Distributed", "Active, Centralized, Indexed, Data"],
                correctAnswer: 0,
            },
            {
                question: "Which type of key allows NULL values?",
                options: ["Primary Key", "Candidate Key", "Foreign Key", "Super Key"],
                correctAnswer: 2,
            },
            {
                question: "Which indexing method is used in DBMS to speed up searches?",
                options: ["Sequential Indexing", "Hash Indexing", "Primary Indexing", "B-Tree Indexing"],
                correctAnswer: 3,
            },
            {
                question: "Which SQL clause is used to filter records?",
                options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is NOT a type of join in SQL?",
                options: ["INNER JOIN", "OUTER JOIN", "CROSS JOIN", "MERGE JOIN"],
                correctAnswer: 3,
            },
            {
                question: "Which of the following ensures data integrity by enforcing unique values in a column?",
                options: ["PRIMARY KEY", "UNIQUE", "NOT NULL", "FOREIGN KEY"],
                correctAnswer: 1,
            },
            {
                question: "Which type of relationship exists when a single record in one table is related to multiple records in another table?",
                options: ["One-to-One", "One-to-Many", "Many-to-Many", "Self-Join"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following commands is used to update existing records in a table?",
                options: ["ALTER", "MODIFY", "UPDATE", "CHANGE"],
                correctAnswer: 2,
            },
            {
                question: "Which command is used to remove all rows from a table without removing the structure?",
                options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"],
                correctAnswer: 2,
            },
            {
                question: "What is the main purpose of normalization in DBMS?",
                options: ["Reduce redundancy", "Increase performance", "Increase data duplication", "Make queries faster"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following commands is used to add a new column to an existing table?",
                options: ["ALTER TABLE", "UPDATE TABLE", "MODIFY TABLE", "APPEND COLUMN"],
                correctAnswer: 0,
            },
            {
                question: "Which SQL function is used to count the number of rows in a table?",
                options: ["SUM()", "COUNT()", "AVG()", "TOTAL()"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following SQL functions returns the highest value in a column?",
                options: ["MAX()", "HIGH()", "TOP()", "GREATEST()"],
                correctAnswer: 0,
            }
        ]
    },
];
