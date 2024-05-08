import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ChartOptions, ChartType } from "chart.js";
import { AppState } from "src/app/app.reducers";
import * as PostsAction from "../../actions";
import { PostDTO } from "../../models/post.dto";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  posts: PostDTO[];
  numLikes: number = 0;
  numDislikes: number = 0;

  public chartOptions: ChartOptions = {
    responsive: true,
  };
  public chartType: ChartType = "bar";
  public chartData = {
    datasets: [
      {
        data: [this.numLikes],
        label: "Likes",
        backgroundColor: "rgba(0,0,0,0.4)",
      },
      {
        data: [this.numDislikes],
        label: "Dislikes",
        backgroundColor: "rgba(255,220,0,0.4)",
      },
    ],
    labels: ["Likes", "Dislikes"],
  };

  constructor(private store: Store<AppState>) {
    this.posts = new Array<PostDTO>();
    this.numLikes = 0;
    this.numDislikes = 0;

    this.store.select("posts").subscribe((posts) => {
      this.posts = posts.posts;

      this.numLikes = 0;
      this.numDislikes = 0;

      this.posts.forEach((post) => {
        this.numLikes = this.numLikes + post.num_likes;
        this.numDislikes = this.numDislikes + post.num_dislikes;
        this.updateChartData(); // Cambios en el grafico
      });
    });
  }

  updateChartData() {
    this.chartData = {
      datasets: [
        {
          data: [this.numLikes],
          label: "Likes",
          backgroundColor: "rgba(255,0,168,0.4)",
        },
        {
          data: [this.numDislikes],
          label: "Dislikes",
          backgroundColor: "rgba(255,220,0,0.4)",
        },
      ],
      labels: ["Data"],
    };
  }

  ngOnInit(): void {
    this.loadPosts();
    this.createBarChart();
  }

  private loadPosts(): void {
    this.store.dispatch(PostsAction.getPosts());
  }

  createBarChart() {}
}
