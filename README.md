# SparkleQuiz

## Initial Plan:
1. Backend Core (Express & Database);

2. Frontend Setup (React);

3. Frontend/Backend Integration.

### DataBase Schema:
1. Question:
- id: ObjectId;
- question: String;
- answers: Array of Strings;
- correctAnswer: String;

2. User:
- id: ObjectId;
- username: String;
- passwordHash: String;
- role: String ('regular', 'admin');
- highScore: Number of Correct Answers.


### Routes:
1. /api/users/signup;
2. /api/users/login;
3. /api/quizes;
