import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent implements OnInit {

  @Input() user: any;

  constructor(
    private config: NgbModalConfig, 
    private modalService: NgbModal
    ) {
    // customize default values of modals used by this component tree
    this.config.backdrop = 'static';
    this.config.keyboard = false;
  }

  ngOnInit() {
  }

  open(content: any) {
    this.modalService.open(content);
  }

}
