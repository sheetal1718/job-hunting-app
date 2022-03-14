import React from "react";

// packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Highlighter from "react-highlight-words";

// interfaces
import { jobProps } from "../../interfaces/type";

type Props = jobProps;

export const JobDetails: React.FC<Props> = ({ jobItem, keywords }) => {
  dayjs.extend(relativeTime);
  const time = dayjs(jobItem.updated).fromNow();
  let timeDifference = dayjs().diff(dayjs(jobItem.updated), "hours", true);
  let newJobTag = timeDifference < 24 ? "New" : "";

  return (
    <div className="card_wrapper">
      <div>
        <div>
          <div className="card">
            <p className="net-tag"> {newJobTag && newJobTag} </p>
            <h2>
              <a
                style={{ textDecoration: "none" }}
                target={"_blank"}
                rel="noopener noreferrer"
                href={jobItem.link}
              >
                {jobItem.title}
              </a>
            </h2>
            <p className="snippet">
              <Highlighter
                highlightClassName="hightlight-text"
                searchWords={[keywords]}
                autoEscape={true}
                textToHighlight={jobItem.snippet}
              />
            </p>
            <section className="location">
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    paddingRight: "7px",
                  }}
                >
                  {jobItem.company}
                </p>
              </div>
              <p>
                <FontAwesomeIcon
                  style={{ paddingRight: "7px" }}
                  icon={faLocationDot}
                />
                {jobItem.location}
              </p>
              <p>
                <FontAwesomeIcon
                  style={{ paddingRight: "7px" }}
                  icon={faClock}
                />
                {time}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
