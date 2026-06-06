particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#00f5ff" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00f5ff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});

particlesJS("particles-about", {
  particles: {
    number: { value: 50 },        // fewer dots — less distracting
    color: { value: "#00f5ff" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },      // more subtle
    size: { value: 2 },           // smaller dots
    line_linked: {
      enable: true,
      distance: 130,
      color: "#00f5ff",
      opacity: 0.2,              // very faint lines
      width: 1
    },
    move: { enable: true, speed: 1.5 }  // slower — calmer feel
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});


particlesJS("particles-skills", {
    particles: {
        number: { value: 50 },
        color: { value: "#00f5ff" },
        shape: { type: "circle" },
        opacity: { value: 0.2 },
        size: { value: 2 },
        line_linked: {
            enable: true,
            distance: 130,
            color: "#00f5ff",
            opacity: 0.15,
            width: 1
        },
        move: { enable: true, speed: 1.5 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    }
});




particlesJS("particles-projects", {
    particles: {
        number: { value: 50 },
        color: { value: "#00f5ff" },
        shape: { type: "circle" },
        opacity: { value: 0.2 },
        size: { value: 2 },
        line_linked: {
            enable: true,
            distance: 130,
            color: "#00f5ff",
            opacity: 0.15,
            width: 1
        },
        move: { enable: true, speed: 1.5 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    }
});


particlesJS("particles-contact", {
    particles: {
        number: { value: 50 },
        color: { value: "#00f5ff" },
        shape: { type: "circle" },
        opacity: { value: 0.2 },
        size: { value: 2 },
        line_linked: {
            enable: true,
            distance: 130,
            color: "#00f5ff",
            opacity: 0.15,
            width: 1
        },
        move: { enable: true, speed: 1.5 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    }
});

particlesJS("particles-education", {
    particles: {
        number: { value: 50 },
        color: { value: "#00f5ff" },
        shape: { type: "circle" },
        opacity: { value: 0.2 },
        size: { value: 2 },
        line_linked: {
            enable: true,
            distance: 130,
            color: "#00f5ff",
            opacity: 0.15,
            width: 1
        },
        move: { enable: true, speed: 1.5 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    }
});




// Home page
var typed = new Typed('.typed', {
    strings: [
        'Aspiring Software Engineer',
        'Java and Web Developer',
        'Tech Enthusiast', 
        'Problem Solver',
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
});


const form = document.querySelector('.contact-form');
const inputs = document.querySelectorAll('.contact-form input');
const textarea = document.querySelector('.contact-form textarea');
const btn = document.querySelector('.contact-form .btn-box');

btn.addEventListener('click', function(){
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const message = textarea.value.trim();

    if(name === '' || email === '' || message === ''){
        alert('Please fill in all required fields!');
        return;
    }

    // Open Gmail with pre-filled message
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=afzalmomin755@gmail.com&su=Message from ${name}&body=${message}`;
    window.open(gmailUrl, '_blank');

    // Clear form after sending
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
    textarea.value = '';

    alert('Redirecting to Gmail!');
});




// Re-run reveal on page load after 0.5s
setTimeout(function(){
    revealOnScroll();
}, 500);



