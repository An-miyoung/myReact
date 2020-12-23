import React from "react";
import ProfileStyle from "Profile.module.scss";

class Profile extends React.Component {
    render() {
        return (
            <div className={ProfileStyle.wrapper}>
                Profile Component
            </div>
        )
    }
}

export default Profile;