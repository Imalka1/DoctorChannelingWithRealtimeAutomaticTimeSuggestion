import {Component, OnInit, Input} from '@angular/core';
import {ClinicDTO} from 'src/app/dtos/ClinicDTO';
import {ClinicsService} from 'src/app/services/clinics.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-fixed-clinic',
  templateUrl: './fixed-clinic.component.html',
  styleUrls: ['./fixed-clinic.component.css']
})
export class FixedClinicComponent implements OnInit {

  @Input() fixed_clinicDto: ClinicDTO;

  constructor(private clinicsService: ClinicsService, private router: Router, private datePipe: DatePipe) {
  }

  ngOnInit() {
  }

  changeClinic() {
    this.fixed_clinicDto.edit = true;
  }

  cancelClinic() {
    if (this.fixed_clinicDto.clinic._id != undefined && this.fixed_clinicDto.clinic.status == "OK") {
      this.fixed_clinicDto.clinic.status = "Cancel";
      this.clinicsService.cancelClinic(this.fixed_clinicDto.clinic).subscribe(
        (result) => {
          if (result) {
            this.fixed_clinicDto.clinic.status = "Cancel";
          }
        })
    } else if (this.fixed_clinicDto.clinic._id != undefined) {
      this.clinicsService.removeClinic(this.fixed_clinicDto.clinic).subscribe(
        (result) => {
          if (result) {
            this.fixed_clinicDto.clinic.status = "Not yet";
            this.fixed_clinicDto.clinic.clinicTime = "00:00";
            this.fixed_clinicDto.clinic.patientsCount = 0;
          }
        })
    }
  }

  isPrevious() {
    if (this.fixed_clinicDto.isPrevious) {
      return true;
    } else {
      return false;
    }
  }

  isToday() {
    if (this.fixed_clinicDto.isToday) {
      return true;
    } else {
      return false;
    }
  }

  isNext() {
    if (this.fixed_clinicDto.isNext) {
      return true;
    } else {
      return false;
    }
  }

  patientsPanel(clinicDate) {
    this.router.navigate(['/head/patients'], {queryParams: {clinicDate: clinicDate}});
  }
}
