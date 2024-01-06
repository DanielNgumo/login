import { Component, OnInit, inject } from '@angular/core';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CdkTableDataSourceInput } from '@angular/cdk/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dataSource: CdkTableDataSourceInput<any> = [];
displayedColumns: any;
  constructor(private commonService: CommonService, private http: HttpClient) {}

  list: any[] = [];
  ngOnInit(): void {
    this.commonService.getmethod().subscribe((data) => {
      console.log(data);
      this.list = data;
    });
  }


  names:boolean=true;
}
