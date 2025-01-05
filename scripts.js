// Example of dynamically adding video elements
document.addEventListener("DOMContentLoaded", function() {
    const videoList = document.getElementById('video-list');

    const videos = [
        { title: "Most Popular Video", url: "https://m.youtube.com/shorts/UkX2pW7QZ_s" },
        { title: "Newest Live😃", url: "https://m.youtube.com/watch?v=l5hb1Qk8e9o" }
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
