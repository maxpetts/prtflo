/**
 * Returns the basic HTML for the navigation bar.
 * Includes lottie animations for when nav buttons are interacted with.
 *
 * @author Max Petts
 * @link https://github.com/maxpxtts/prtflo
 */

import lottie, { AnimationItem } from "lottie-web";
import Link from "next/link";
import React from "react";
// TODO : Create custom loader for these imports
import animation_contact from "../public/icons/contact.json";
import animation_cv from "../public/icons/cv.json";
import animation_home from "../public/icons/home.json";
import animation_projects from "../public/icons/projects.json";

/**
 * Component for the individual nav bar buttons,
 * handles lottie animations.
 * Admittedly could've been done as functional but practice makes perfect.
 *
 * @param link The desired destination of button, gets passed into the Link component provided by Next.js.
 * @param name The name to be displayed in the button.
 * @param animationPath The path to the Lottie JSON animation.
 */
class LottieButton extends React.Component<{
  link: string;
  name: string;
  animationPath: any;
}> {
  private container: React.RefObject<HTMLAnchorElement>;
  private animation: AnimationItem;
  private isMobile: boolean;
  public state = { isAnimationPlaying: false };

  constructor(props) {
    super(props);
    this.state = { isAnimationPlaying: false };
    // Create reference to container so we can pass it to lotties loadAnimation function
    this.container = React.createRef<HTMLAnchorElement>();
    // Ensure event callback function is bound to this class instance because React..
    this.play_animation = this.play_animation.bind(this);
  }

  componentDidMount() {
    this.animation = lottie.loadAnimation({
      container: this.container.current,
      loop: false,
      autoplay: false,
      animationData: this.props.animationPath,
      name: this.props.name,
    });

    // Must set isMobile after component mount as navigator isn't created because SSR
    this.isMobile = navigator.userAgent.includes("Mobile");

    // Event listener added to avoid strange hover upon quick hover successions.
    this.animation.addEventListener("complete", () =>
      this.setState({ isAnimationPlaying: false })
    );
  }

  componentWillUnmount() {
    lottie.destroy(this.props.name);
  }

  play_animation() {
    if (this.animation !== null && this.state.isAnimationPlaying == false) {
      this.setState({ isAnimationPlaying: true });
      this.animation.goToAndPlay(this.animation.firstFrame, true);
    }
  }

  render() {
    return (
      <li>
        <Link href={this.props.link}>
          <a
            ref={this.container}
            onMouseOver={this.isMobile ? null : this.play_animation}
            onClick={this.isMobile ? this.play_animation : null}
          >
            {this.props.name}
          </a>
        </Link>
      </li>
    );
  }
}

/**
 * Easy to add nav bar items using a json object
 * link: The url to redirect to
 * name: The name to be displayed on the button
 * animationPath: The path or JSON object to the animation
 */
const pages = [
  { link: "/", name: "Home", animationPath: animation_home },
  { link: "/projects", name: "Projects", animationPath: animation_projects },
  { link: "/cv", name: "CV", animationPath: animation_cv },
  { link: "/contact", name: "Contact", animationPath: animation_contact },
];

function Nav() {
  return (
    <nav>
      <ul>
        {pages.map(({ link, name, animationPath }) => (
          <LottieButton
            key={name}
            link={link}
            name={name}
            animationPath={animationPath}
          ></LottieButton>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
