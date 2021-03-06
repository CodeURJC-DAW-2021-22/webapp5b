import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';
import { SharedModule } from '@app/shared/shared.module';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PurchaseHistoryComponent } from './pages/purchase-history/purchase-history.component';


@NgModule({
  declarations: [
    UserComponent,
    UserInfoComponent,
    PurchaseHistoryComponent,
    ProfilePictureComponent,
    AccountDetailsComponent,
    TransactionCardComponent,
    ChangePasswordComponent,
  ],
  imports: [
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
