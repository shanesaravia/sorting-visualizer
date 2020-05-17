import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import anime from 'animejs/lib/anime.es.js';

const animateComplete = () => {
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml11 .letters');
  // eslint-disable-next-line no-control-regex
  textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
  document.querySelector('.ml11').style.opacity = 1;

  anime.timeline({ loop: false })
    .add({
      targets: '.ml11 .line',
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml11 .line',
      translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml11 .letter',
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 34 * (i + 1)
    }, '-=775').add({
      targets: '.ml11',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    }).add({
      targets: '.ml11 .line',
      translateX: [document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10, 0],
      easing: "easeOutExpo",
      duration: 100,
      delay: 100
    })
}

const useStyles = makeStyles(theme => ({
  letters: {
    color: theme.palette.text.primary,
    display: 'inline-block',
    lineHeight: '1em'
  },
  line: {
    backgroundColor: theme.palette.text.primary,
    opacity: 0,
    position: 'absolute',
    left: 0,
    height: '100%',
    width: 3,
    transformOrigin: '0 50%'
  },
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 9999,
    fontSize: '6vw',
    transform: 'translate(-50%, -50%)',
    display: 'inline-block'
  },
  ml11: {
    opacity: 0,
  }
}))

const CompleteMessage = () => {
  const classes = useStyles();
  return (
    <Typography variant='h1' className={clsx(classes.ml11, 'ml11')}>
      <span className={clsx(classes.wrapper, 'text-wrapper')}>
        <span className={clsx(classes.line, 'line', 'line1')}></span>
        <span className={clsx(classes.letters, 'letters')}>Sorting Complete</span>
      </span>
    </Typography>
  )
}

export default CompleteMessage;
export {
  animateComplete
};