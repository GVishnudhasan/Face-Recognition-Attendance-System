<br/>
<p align="center">
  <h3 align="center">Face Recognition Attendance System</h3>

  <p align="center">
    An Awesome Web Application to make the attendance process by clicking photos.
    <br/>
    <br/>
    <a href="https://github.com/GVishnudhasan/Face-Recognition-Attendance-System/issues">Report Bug</a>
    .
    <a href="https://github.com/GVishnudhasan/Face-Recognition-Attendance-System/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/GVishnudhasan/Face-Recognition-Attendance-System/total) ![Contributors](https://img.shields.io/github/contributors/GVishnudhasan/Face-Recognition-Attendance-System?color=dark-green) ![Stargazers](https://img.shields.io/github/stars/GVishnudhasan/Face-Recognition-Attendance-System?style=social) ![Issues](https://img.shields.io/github/issues/GVishnudhasan/Face-Recognition-Attendance-System) ![License](https://img.shields.io/github/license/GVishnudhasan/Face-Recognition-Attendance-System) 

## About The Project

This project is an automated system for requesting and approving no-due certificates for students at the end of each semester. The application consists of a login and registration page, where users can register as a student or faculty members. Each role has different privileges and access to different parts of the application.

Once logged in, students are redirected to a dashboard that displays a list of their subjects and the handling faculty for each subject. Students can request no due certificates from the handling faculty for each subject, and the respective faculty member can approve or reject the request. After all faculty members have approved the request, it is sent to the head of the department (HoD) for final approval. Once the HoD has given their digital signature, the student is approved to write the end-semester exams.

## Built With

The project uses the MEAN (MongoDB, Express.js, AngularJS, and Node.js) stack for development.

## Features

1. Authentication and Authorization
2. User roles and permissions (admin and user)
3. Registration and login for users
4. Admin can view a list of registered students and their respective attendance
5. User can mark attendance for a student in a course
6. View attendance report of a student

## Getting Started

1. Clone the repository: `git clone https://github.com/GVishnudhasan/Face-Recognition-Attendance-System.git`

2. Navigate to the Face-Recognition-Attendance-System directory: cd `Face-Recognition-Attendance-System`

## Install dependencies:

1. For the backend, run `npm install`
2. For the frontend, navigate to the client directory: `cd client` and then run `npm install`
3. Create a .env file in the root directory and add the following environment variables:
`PORT=<port_number>`
`DB_URL=<mongodb_database_url>`
`JWT_SECRET=<your_jwt_secret>`
    
4. To start the backend server, run `npm run dev` in the server directory

5. To start the frontend development server, navigate to the client directory: `cd client` and then run `ng serve`

## Open Issues

See the [open issues](https://github.com/GVishnudhasan/Face-Recognition-Attendance-System/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/GVishnudhasan/Face-Recognition-Attendance-System/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/GVishnudhasan/Face-Recognition-Attendance-System/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

If you would like to contribute to the project, please follow these steps:

1. Fork the repository to your own GitHub account.
2. Create a new branch for your changes.
3. Make your changes and test them thoroughly.
4. Commit your changes and push them to your forked repository.
5. Create a pull request from your branch to the original repository, explaining your changes and why they should be merged.

## License

Distributed under the MIT License. See [LICENSE](https://github.com/GVishnudhasan/Face-Recognition-Attendance-System/blob/main/LICENSE.md) for more information.

## Credits
This project is being developed by G Vishnudhasan.
