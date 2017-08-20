import React, {Component} from 'react';
import Scroll from 'react-scroll';
import NavBar from '../components/navbar';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active_anchor: "welcome"
        };
    }

    componentDidMount() {
        Scroll.Events.scrollEvent.register('begin');
        Scroll.Events.scrollEvent.register('end');
        Scroll.scrollSpy.update();
    }

    componentWillUnmount() {
        Scroll.Events.scrollEvent.remove('begin');
        Scroll.Events.scrollEvent.remove('end');
    }

    render() {
        let profile_pic_url = "https://lh3.googleusercontent.com/X7NzmM3wPWKm5ZE96-M5-sAIrqoWaaZx1mWdd5KZLis3FdEHesPU2A4TkeRnrYPlaUoIybTaG32ovO07aRIsdoujE1ZfjrA2=w1280-h800-rw-no";

        // Factory for <Scroll.Link>
        let customScrollLink = (id, label) => {
            return (
                <Scroll.Link
                    to={id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={() => this.setState({active_anchor: id})}
                >
                    {label}
                </Scroll.Link>
            );
        };

        return (
            <div>
                <NavBar
                    activeAnchor={this.state.active_anchor}
                    pageAnchors={[
                        customScrollLink("welcome", "Welcome"),
                        customScrollLink("about", "About Me")
                    ]}
                />

                {/* Welcome */}
                <Scroll.Element name="welcome">
                    <div className="jumbotron" style={{padding: "60px 0 20px 0"}}>
                        <div className="container">
                            <h1>Welcome</h1>
                            <p>Hi, my name is Colin. I&rsquo;m a Computer Science student attending UC Irvine.</p>
                        </div>
                    </div>
                </Scroll.Element>

                {/* About Me */}
                <Scroll.Element name="about">
                    <div className="container" style={{paddingBottom: "50px"}}>
                        <img
                            className="img-responsive img-circle"
                            src={profile_pic_url}
                            alt="Portrait of Colin"
                            style={{
                                width: "20%",
                                display: "block",
                                margin: "auto",
                                minHeight: "150px",
                                minWidth: "150px"
                            }}
                        />

                        <h1 className="text-center">About Me</h1>
                        <p className="text-center lead">
                            Throughout my life, I have embodied certain qualities that define my character.
                        </p>

                        <div className="row">
                            <div className="col-sm-4">
                                <h3>Learner</h3>
                                <p>
                                    Since the start of my childhood, through my years in grade school, and up until now at
                                    the University of California Irvine, I have always felt a strong passion to learn.
                                    Nothing excites me more than a new scientific discovery, hearing the latest in tech
                                    news, or discussing interesting ideas with my friends.
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <h3>Programmer</h3>
                                <p>
                                    Writing code is one of my longest-lasting interests and favorites among my hobbies. As
                                    both a logical and analytical person, programming has fascinated me since the moment I
                                    made my first web page after school in the 5th grade. To this day I enjoy coding in
                                    Python, Java, HTML, and CSS.
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <h3>Brother</h3>
                                <p>
                                    As an incoming college freshman, I decided to join the Phi Delta Theta social
                                    fraternity. Since then, I have strived to realize the fraternity's three principles:
                                    Friendship, Sound Learning, and Moral Rectitude. My current position is the Public
                                    Relations Officer on the fraternity's 2015-2016 leadership council.
                                </p>
                            </div>
                        </div>
                    </div>
                </Scroll.Element>

            </div>
        );
    }
}
