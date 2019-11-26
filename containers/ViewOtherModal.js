import React, { Component } from 'react';
import axios from 'axios'
import '../css/ViewModal.css'
import '../assets/fonts/fontface.css'
import { convertArrayToCSV } from 'convert-array-to-csv';
import Modal from 'react-modal';

class ViewOtherModal extends Component {

    render() {
        let view = this.props.view
        return (
            <div className="view-modal">
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Adminpass : </div>
                        <div className="view-modal-text">{view.adminpass}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">Name : </div>
                        <div className="view-modal-text">{view.name}</div>
                    </div>
                </div>
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Dealer : </div>
                        <div className="view-modal-text">{view.dealer}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">Type : </div>
                        <div className="view-modal-text">{view.type}</div>
                    </div>
                </div>
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Department : </div>
                        <div className="view-modal-text">{view.department}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">Brand : </div>
                        <div className="view-modal-text">{view.brand}</div>
                    </div>
                </div>
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Gen : </div>
                        <div className="view-modal-text">{view.gen}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">Model : </div>
                        <div className="view-modal-text">{view.model}</div>
                    </div>
                </div>
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Serial : </div>
                        <div className="view-modal-text">{view.serial}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">Warranty : </div>
                        <div className="view-modal-text">{view.warranty}</div>
                    </div>
                </div>
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Date : </div>
                        <div className="view-modal-text">{view.date}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewOtherModal