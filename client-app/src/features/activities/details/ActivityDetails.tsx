import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;

  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <LoadingComponent />;

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
            as={Link}
            to={`/manage/${activity.id}`}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            as={Link}
            to={"/activities"}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </div>
    </div>
  );
});
