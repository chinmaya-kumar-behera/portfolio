import Link from 'next/link';
import React from 'react'

const NavigationHandler = () => {
    const linkedInUrl = "http://www.linkedin.com/in/chinmayakumarbehera";
    const githubUrl = "https://github.com/chinmaya-kumar-behera";
    const instaUrl = "https://www.instagram.com/ch.kumar__/";
    const facebookUrl = "https://www.facebook.com/kumarchinmay.chinmay";
    const twitterUrl = "https://twitter.com/chinu2127";

    const navigateToLinkedin = () => {
        window.open(linkedInUrl, "_blank");
    }

    const navigateToInstagram = () => {
      window.open(instaUrl, "_blank");
    };

    const navigateToGithub = () => {
      window.open(githubUrl, "_blank");
    };

    const navigateToFacebook = () => {
      window.open(facebookUrl, "_blank");
    };

    const navigateToTwitter = () => {
      window.open(twitterUrl, "_blank");
    };

  return {
    navigateToLinkedin,
    navigateToInstagram,
    navigateToGithub,
    navigateToFacebook,
    navigateToTwitter,
  };
}

export default NavigationHandler