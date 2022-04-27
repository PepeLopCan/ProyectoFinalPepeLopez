import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ChipsModule} from 'primeng/chips';
import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {BadgeModule} from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import {CheckboxModule} from 'primeng/checkbox';
import {CarouselModule} from 'primeng/carousel';
import {DataViewModule} from 'primeng/dataview';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';








@NgModule({
  declarations: [],
  imports: [
    BreadcrumbModule,
    TableModule,
    TooltipModule,
    DynamicDialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    FileUploadModule,
    HttpClientModule,
    ConfirmDialogModule,
    PasswordModule,
    RippleModule,
    PaginatorModule,
    AutoCompleteModule,
    ChipsModule,
    TreeModule,
    AccordionModule,
    ChipsModule,
    MenuModule,
    OverlayPanelModule,
    MenubarModule,
    BadgeModule,
    CheckboxModule,
    CarouselModule,
    DataViewModule,
    CardModule,
    ToastModule,
    RatingModule,
    InputNumberModule,
    AvatarModule
  ],
  exports: [
    TableModule,
    TooltipModule,
    DynamicDialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    FileUploadModule,
    HttpClientModule,
    ConfirmDialogModule,
    PasswordModule,
    RippleModule,
    PaginatorModule,
    AccordionModule,
    AutoCompleteModule,
    ChipsModule,
    TreeModule,
    MenuModule,
    BreadcrumbModule,
    OverlayPanelModule,
    MenubarModule,
    BadgeModule,
    CheckboxModule,
    CarouselModule,
    DataViewModule,
    CardModule,
    ToastModule,
    RatingModule,
    InputNumberModule,
    AvatarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModuleModule { }
