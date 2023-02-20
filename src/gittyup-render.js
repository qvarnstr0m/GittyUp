import { getLatestEvents } from './gittyup-get.js';
import { GittyupConfig } from '../gittyup-config.js'

getLatestEvents(GittyupConfig.username, GittyupConfig.numEvents).then(events => {
  const header = document.getElementById('header');
  header.innerHTML = `GittyUp Demo for ${GittyupConfig.username}:`;
  const eventsList = document.getElementById('events');
  
  events.forEach(event => {
    
    let eventType = '';
    let eventDescription = '';
    let createdAt = new Date(event.created_at).toLocaleString();
    switch (event.type) {
      // Todo: CommitCommentEvent
      case 'CreateEvent':
        eventType = 'Created';
        eventDescription = event.payload.ref === null ? `${event.payload.ref_type}` : `${event.payload.ref_type} '${event.payload.ref}' at repository`;
        break;
      // Todo: DeleteEvent
      // Todo: ForkEvent
      // Todo: GollumEvent
      case 'IssueCommentEvent':
        eventType = 'Commented on';
        eventDescription = `issue '${event.payload.issue.title}' at repository`;
        break;
      case 'IssuesEvent':
        eventType = event.payload.action.charAt(0).toUpperCase() + event.payload.action.slice(1);
        eventDescription = `issue '${event.payload.issue.title}' at repository`;
        break;
      // Todo: MemberEvent
      // Todo: PublicEvent
      case 'PullRequestEvent':
        eventType = event.payload.action === 'closed' && event.payload.pull_request.merged ? 'Merged' : 'Opened';
        eventDescription = `pull request at repository`;
        break;
      // Todo: PullRequestReviewEvent
      // Todo: PullRequestReviewCommentEvent
      // Todo: PullRequestReviewThreadEvent
      case 'PushEvent':
        eventType = 'Pushed to';
        eventDescription = `repository`;
        break;
      // Todo: ReleaseEvent
      // Todo: SponsorshipEvent
      // Todo: WatchEvent
      default:
        eventType = event.type;
        eventDescription = `at repository`;
        break;
    }

    const li = document.createElement('li');
    li.innerHTML = GittyupConfig.includeDateTime === true ? `${eventType} ${eventDescription} <a href="https://www.github.com/${event.repo.name}" 
    target="_blank" rel="noopener noreferrer">${event.repo.name}</a> at ${createdAt}` : `${eventType} ${eventDescription} 
    <a href="https://www.github.com/${event.repo.name}" target="_blank" rel="noopener noreferrer">${event.repo.name}</a>`;
    eventsList.appendChild(li);
  });
});
