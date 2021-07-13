/**
 * Returns the basic HTML for the navigation bar.
 * Includes lottie animations for when nav buttons interacted with.
 * 
 * @author Max Petts
 * @link https://github.com/maxpxtts/prtflo
 * 
 *  @todo
 *  - Handle mobile: must animate on click rather than hover.
 */

import Link from "next/link";
import React from "react";
import lottie, { AnimationItem } from "lottie-web";
import animation_home from "../public/icons/home.json";
import animation_projects from "../public/icons/projects.json";
import animation_cv from "../public/icons/cv.json";
import animation_contact from "../public/icons/contact.json";

/**
 * Component for the individual nav bar buttons,
 * handles lottie animations.
 * Admittedly could've been done as functional but practice makes perfect.
 * 
 * @param link The desired destination of button, gets passed into the Link component provided by Next.js.
 * @param name The name to be displayed in the button.
 * @param animationPath The path to the Lottie JSON animation.
 */
class LottieButton extends React.Component<{ link: string, name: string, animationPath: any }> {
    private container: React.RefObject<HTMLLIElement>;
    private animation: AnimationItem;

    constructor(props) {
        super(props);
        // Create reference to container so we can pass it to lotties loadAnimation function
        this.container = React.createRef<HTMLLIElement>();
        // Ensure event callback function is bound to this class instance because React..
        this.play_animation = this.play_animation.bind(this);
    }

    componentDidMount() {
        this.animation = lottie.loadAnimation({
            container: this.container.current,
            loop: false,
            autoplay: false,
            animationData: this.props.animationPath
        })
    }

    play_animation() {
        if (this.animation !== null) {
            this.animation.goToAndPlay(0, true);
        }
    }

    render() {
        return (
            // Place lottie onto LI element to avoid glitch when hovering.
            <li ref={this.container}>
                <Link href={this.props.link}>
                    <a onMouseOver={this.play_animation} >
                        {this.props.name}
                    </a>
                </Link>
            </li >
        )
    }
}

/**
 * Easy to add nav bar pages
 * link: The url to redirect to
 * name: The name to be displayed on the button
 * animationPath: The path or JSON object to the animation
 */
const pages = [
    { link: "/", name: "Home", animationPath: animation_home },
    { link: "/projects", name: "Projects", animationPath: animation_projects },
    { link: "/cv", name: "CV", animationPath: animation_cv },
    { link: "/contact", name: "Contact", animationPath: animation_contact }
];

function Nav() {
    return (
        <nav>
            <ul>
                {pages.map(({ link, name, animationPath }) => (
                    <LottieButton key={name} link={link} name={name} animationPath={animationPath}></LottieButton>
                ))}
            </ul >
        </nav >
    );
}

export default Nav;