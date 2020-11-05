import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog,MatDialogRef} from '@angular/material/dialog';
import {Ingredient} from "../ingredient";

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  submitted = false;

  @ViewChild("instruction") nameField: ElementRef;
  editName(): void {
    this.nameField.nativeElement.focus();
  }

  constructor(
    public dialogRef: MatDialogRef<string>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.data = ';'
    this.dialogRef.close();
  }
}
