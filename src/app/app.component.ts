import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Inject,
  Injector,
  OnInit,
} from "@angular/core";
import { Course } from "./model/course";
import { Observable } from "rxjs";
import { AppConfig, CONFIG_TOKEN } from "./config";
import { COURSES } from "../db-data";
import { CoursesService } from "./courses/courses.service";
import { createCustomElement } from "@angular/elements";
import { CourseTitleComponent } from "./course-title/course-title.component";
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const params = new HttpParams()
    .set('page', '1')
    .set('pageSize', '10');

    this.courses$ = this.http.get<Course[]>("/api/courses", {params});
  }
}
