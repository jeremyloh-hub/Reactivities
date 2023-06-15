import React from "react";
import { Button } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;

  if (!activity) return <LoadingComponent />;

  return (
    <div className="ui card fluid">
      <div className="image">
        <img
          src={`/assets/categoryImages/${activity.category}.jpg`}
          alt="kristy img"
        ></img>
      </div>
      <div className="content">
        <a className="header">{activity.title}</a>
        <div className="meta">
          <span>{activity.date}</span>
        </div>
        <div className="description">{activity.description}</div>
      </div>
      <div className="extra content">
        <Button.Group widths="2">
          <Button
            onClick={() => openForm(activity.id)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={cancelSelectedActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </div>
    </div>
  );
}
