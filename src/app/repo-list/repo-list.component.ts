import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html'
})
export class RepoListComponent implements OnInit {
  repositories: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;


  constructor(private route: ActivatedRoute, private githubService: GithubService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.githubService.getRepositories(username).subscribe(
        (repos) => {
          this.repositories = repos;
        },
        (error) => {
          console.error('Error fetching repositories:', error);
        }
      );
    });
  }
}
