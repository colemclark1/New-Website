import React from "react";
import style from "./Project.module.css";
import { Badge, Collapse } from "react-bootstrap";
import {
  FaChevronUp,
  FaChevronDown,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Project = (props) => {
  const video = React.useRef(null);

  React.useEffect(() => {
    if (video && video.current) {
      if (!props.display) {
        video.current.pause();
      }
    }
  }, [props.display]);

  return (
    <>
      <div
        className={`${style.card} ${props.display ? style.active : ""}`}
        onClick={props.setDisplayIndex}
      >
        <div className={style.cardUpper}>
          <img src={props.project.image} className={style.picture}></img>
          <div className={style.body}>
            <div className={style.title}>{props.project.title}</div>
            <div className={style.textShort}>{props.project.textShort}</div>
            <div className={style.type}>
              <Badge pill bg="none" className={style.badge}>
                {props.project.type}
              </Badge>
              <div className={style.links}>
              {!!props.project.deployed && (
                  <a href={props.project.deployed} target="_blank">
                    <FaExternalLinkAlt size="20px" />
                  </a>
                )}
                {!!props.project.github && (
                  <a href={props.project.github} target="_blank">
                    <FaGithub size="20px" />
                  </a>
                )}
                </div>
            </div>
          </div>
        </div>
        <div className={style.cardLower}>
          {props.display ? (
            <FaChevronUp size={"12px"} />
          ) : (
            <FaChevronDown size={"12px"} />
          )}
        </div>
      </div>

      {
        <Collapse in={props.display}>
          <div
            className={`${style.fullWidthCard} ${
              props.display ? style.active : ""
            }`}
          >
            <div className={style.firstCol}>
              <div>

                <div className={style.year}>{props.project.year}</div>
                <div className={style.for}>{props.project.for}</div>

              </div>
              <div className={style.textLong}>{props.project.textLong}</div>
              <div className={style.tech}>
                {props.project.tech.map((techBadge, i) => (
                  <Badge pill key={i} bg="none">
                    {techBadge}
                  </Badge>
                ))}
              </div>
            </div>
            {!!props.project.video && (
              <div className={style.secondCol}>
                <video
                  preload="auto"
                  ref={video}
                  controls
                  className={style.video}
                >
                  <source src={props.project.video} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        </Collapse>
      }
    </>
  );
};

export default Project;
