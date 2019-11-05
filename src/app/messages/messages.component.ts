import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';
import { Message } from '../_models/Message';
import { MessageService } from '../_services/message.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
})
export class MessagesComponent implements OnInit {

    private authUser: User;
    private receiver: User;
    private messages: Message[];

    private messageCreationForm = this.formBuilder.group({
        content: ['', Validators.required]
    });

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private messageService: MessageService
    ) { }

    ngOnInit() {

        this.userService.fetchMe().subscribe(body => this.authUser = body.user);


        this.route.paramMap.subscribe(params => {

            const receiverId = params.get('id');

            this.userService.fetchOne(receiverId).subscribe(body => {
                this.receiver = body.user;

                // tslint:disable-next-line: no-shadowed-variable
                this.messageService.fetchAllFromReceiver(this.receiver._id).subscribe(body => {
                    this.messages = body.data;
                });
            });
        });
    }


    onSubmit() {

        const receiverId = this.receiver._id;
        const content = this.messageCreationForm.get('content').value as string;

        this.messageService.createOne({ receiverId, content }).subscribe(body => {

            // tslint:disable-next-line: no-shadowed-variable
            this.messageService.fetchAllFromReceiver(this.receiver._id).subscribe(body => {
                this.messages = body.data;
            });
        });
    }

}
