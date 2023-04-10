import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AttendanceService } from '../_services/attendance.service';
import { CourseService } from '../_services/course.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
})
export class BoardUserComponent implements OnInit {
  courseCodes: any[] = ['CS3301', 'EE6473', 'CS3302', 'EE6474'];
  courseNames: any[] = [
    'Computer Networks',
    'Digital Signal Processing',
    'Computer Networks Lab',
    'Digital Signal Processing Lab',
  ];
  selectedCourseCode: string = '';
  selectedCourseName: string = '';
  selfie: string = '';

  constructor(
    private userService: UserService,
    private attendanceService: AttendanceService,
    private courseService: CourseService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    const currentUser = this.storageService.getUser();
    console.log(currentUser);
    // this.courseService.getCourses().subscribe(
    //   (data) => {
    //     this.courses = data;
    //   },
    //   (error) => console.error(error)
    // );
    // this.userService.getUserBoard().subscribe({
    //   next: data => {
    //     this.content = data;
    //   },
    //   error: err => {
    //     if (err.error) {
    //       try {
    //         const res = JSON.parse(err.error);
    //         this.content = res.message;
    //       } catch {
    //         this.content = `Error with status: ${err.status} - ${err.statusText}`;
    //       }
    //     } else {
    //       this.content = `Error with status: ${err.status}`;
    //     }
    //   }
    // });
  }

  onSelfieChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.selfie = reader.result as string;
    };
  }

  markAttendance() {
    const currentUser = this.storageService.getUser();
    // console.log(currentUser);
    const attendanceData = {
      studentId: currentUser.id,
      courseCode: this.selectedCourseCode,
      courseName: this.selectedCourseName,
      // selfie: this.selfie,
    };
    // console.log(attendanceData);
    this.attendanceService.markAttendance(attendanceData).subscribe(
      (data) => {
        alert('Attendance marked successfully!');
      },
      (error) => {
        console.error(error);
        alert('Error marking attendance. Please try again later.');
      }
    );
  }
}
