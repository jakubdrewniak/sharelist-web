import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatRippleModule } from '@angular/material/core'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar'
import { MatCheckboxModule } from '@angular/material/checkbox'

const MaterialModules = [
  MatButtonModule,
  BrowserAnimationsModule,
  MatListModule,
  MatIconModule,
  MatRippleModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatCheckboxModule,
]

@NgModule({
  imports: [...MaterialModules],
  exports: [...MaterialModules],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['custom-snackbar'],
      },
    },
  ],
})
export class MaterialModule {}
