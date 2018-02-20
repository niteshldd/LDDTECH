import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule,MatFormFieldModule,
    MatInputModule, MatDatepickerModule,MatNativeDateModule,



} from '@angular/material';
@NgModule({
    imports: [MatDatepickerModule,MatButtonModule,MatIconModule,MatNativeDateModule,MatFormFieldModule,MatInputModule],
    exports: [MatDatepickerModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatNativeDateModule,MatInputModule]
})
export class MaterialModule {}