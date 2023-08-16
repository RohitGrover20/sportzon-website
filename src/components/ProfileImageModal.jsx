
import config from '@/config';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function ProfileImageModal() {
    const [image, setImage] = useState();
    const router = useRouter();

    const UpdateImage = () => {
        axios.post(`${config.API_URL}/landing/auth/profile-image-update`, { image: image },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true
            },
        ).then((result) => {
            window.location.replace("")
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div
            className="modal fade"
            id="profileImage"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="profileImage"
            aria-hidden="true"
        >
            <div
                className="modal-dialog modal-dialog-centered login-pop-form modal-md"
                role="document"
            >
                <div className="modal-content" id="profileImageContent">
                    <form encType="multipart/form-data">
                        <span className="mod-close" data-bs-dismiss="modal" aria-hidden="true">
                            <i className="fas fa-close" />
                        </span>
                        <div className="modal-header">
                            <div className="mdl-title"><h5 className="modal-header-title">Update Profile Image</h5></div>
                        </div>
                        <div className="modal-body">
                            <div className="p-0">
                                <input type="file" className='form-control'
                                    accept="image/*"
                                    onChange={(e) => {
                                        setImage(e.currentTarget.files[0])
                                    }}
                                />
                            </div>
                        </div>
                        <div className="modal-footer p-1">
                            <button className='btn btn-secondary'
                                type="reset"
                                onClick={() => {
                                    setImage(undefined)
                                }}
                            ><i className='fa fa-refresh me-1' /> Reset</button>

                            <button className='btn btn-primary'
                                type="button"
                                disabled={image == undefined ? true : false}
                                onClick={UpdateImage}
                            ><i className='fa fa-save me-1' /> Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileImageModal