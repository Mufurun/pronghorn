
const map = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  
    
  
    // Create popup content and listeners
    function createPopupContent(point) {
      const container = document.createElement('div');
      container.className = 'popup-content';
  
      const title = document.createElement('strong');
      title.textContent = point.name;
      container.appendChild(title);
  
      const commentsDiv = document.createElement('div');
      commentsDiv.id = `comments-${point.id}`;
      commentsDiv.className = 'comments';
      commentsDiv.innerHTML = "<i>Loading comments...</i>";
      container.appendChild(commentsDiv);
  
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Add a comment';
      input.style.width = '90%';
      input.id = `input-${point.id}`;
  
      const button = document.createElement('button');
      button.textContent = 'Post';
      button.onclick = () => {
        const comment = input.value.trim();
        if (comment) {
          db.ref(`comments/${point.id}`).push({
            text: comment,
            timestamp: Date.now()
          });
          input.value = '';
        }
      };
  
      const box = document.createElement('div');
      box.className = 'comment-box';
      box.appendChild(input);
      box.appendChild(button);
      container.appendChild(box);
  
      // Listen for comments in real time
      const commentsRef = db.ref(`comments/${point.id}`);
      commentsRef.on('value', (snapshot) => {
        const comments = snapshot.val();
        commentsDiv.innerHTML = '';
        if (comments) {
          Object.values(comments).forEach(c => {
            const div = document.createElement('div');
            div.textContent = `• ${c.text}`;
            commentsDiv.appendChild(div);
          });
        } else {
          commentsDiv.innerHTML = "<i>No comments yet.</i>";
        }
      });
  
      return container;
    }
  
    points.forEach(point => {
      const marker = L.marker(point.coords).addTo(map);
      marker.on('click', () => {
        const popupContent = createPopupContent(point);
        marker.bindPopup(popupContent).openPopup();
      });
    });