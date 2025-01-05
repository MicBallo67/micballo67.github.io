// Example of dynamically adding video elements
document.addEventListener("DOMContentLoaded", function() {
    const videoList = document.getElementById('video-list');

    const videos = [
        <iframe width="315" height="560"
src="https://www.youtube.com/embed/UkX2pW7QZ_s"
title="Most Popular Short"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>,
        { title: "Newest Live😃", url: "https://www.youtube.com/embed/l5hb1Qk8e9o?si=gIoM4YiSTXRVVVJW" }
        // Add more videos here
    ];

    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <iframe width="560" height="315" src="${video.url}" frameborder="0" allowfullscreen></iframe>
        `;
        videoList.appendChild(videoElement);
    });
});

// Example of form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
});
