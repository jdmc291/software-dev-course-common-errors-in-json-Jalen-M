/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = 
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", 
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": 31,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
};


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
    --I first started with the basic commas at the end of key-value pairs, 
2️⃣ How did you confirm that your corrected JSON file was valid?
    --Once I was done, I used the JSON validator to confirm my final version
3️⃣ Which errors were the most difficult to spot? Why?
    --One error that I was unsure about was the age being undefined. I did not know if that was allowed or not. I also did not know if the comma at the end of parking was valid, but it was not
4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
    --Just practicing more JSON retrieval and practicing writing them. Overall just more exposure to them
   //MY ANSWERS
   1. No comma on CheckInDate key value pair to indicate the end of a key-value pair
   2. The invalidBookingJSON variable is wrapped in backticks and I took them out
   3. The array of guests has a name variable that does not have any quotations around it, so i put double quotations around it
   4. The age key-value pair for Bob Smith cannot be undefined, so I added age 31
   5. The end of the amenities array has a comma, indicating that there is another value, but there is nothing. Comma has been taken out
*/
