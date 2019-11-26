import React, { Component } from 'react';
import axios from 'axios'
import '../css/ViewModal.css'
import '../assets/fonts/fontface.css'
import { convertArrayToCSV } from 'convert-array-to-csv';
import Modal from 'react-modal';

class ViewModal extends Component {

    render() {
        let view = this.props.view
        return (
            <div className="view-modal">
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Location : </div>
                        <div className="view-modal-text">{view.location}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">Name : </div>
                        <div className="view-modal-text">{view.name}</div>
                    </div>
                </div>
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Owner : </div>
                        <div className="view-modal-text">{view.owner}</div>
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
                        <div className="view-modal-header">Service Tag : </div>
                        <div className="view-modal-text">{view.servicetag}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">Processor : </div>
                        <div className="view-modal-text">{view.processor}</div>
                    </div>
                </div>
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Ram : </div>
                        <div className="view-modal-text">{view.ram}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">CPU : </div>
                        <div className="view-modal-text">{view.cpu}</div>
                    </div>
                </div>
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">HDD : </div>
                        <div className="view-modal-text">{view.hdd}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">OS : </div>
                        <div className="view-modal-text">{view.os}</div>
                    </div>
                </div>
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Mac Wifi : </div>
                        <div className="view-modal-text">{view.macwifi}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">Mac Lan : </div>
                        <div className="view-modal-text">{view.maclan}</div>
                    </div>
                </div>
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Windows ID : </div>
                        <div className="view-modal-text">{view.windowsid}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">Serial : </div>
                        <div className="view-modal-text">{view.serial}</div>
                    </div>
                </div>
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Screen : </div>
                        <div className="view-modal-text">{view.screen}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">Screen Serial : </div>
                        <div className="view-modal-text">{view.screenserial}</div>
                    </div>
                </div>
                <div className="view-modal-row">
                    <div className="view-modal-box">
                        <div className="view-modal-header">Warranty : </div>
                        <div className="view-modal-text">{view.warranty}</div>
                    </div>
                    <div className="view-modal-box">
                        <div className="view-modal-header">Date : </div>
                        <div className="view-modal-text">{view.date}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewModal