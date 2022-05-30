# Movie reviews

## Story

You have been working as freelancer for years, and every time when the "fun part" (the design, the coding) ends, comes the "pain in the .ss" part, where you have to click-and-script your way through numerous steps, so that to code that you have written is actually live, available for everyone through the internet.

You wonder if there is a more convenient way of doing this, and luckily there is. When developers talk about CI/CD (continuous integration/continuous deployment/delivery) this is exactly what they mean. Some predefined, configured steps (scripts) that run after every commit/push, and some quality assurance thresholds that trigger/abort deployment.

You decide to create a PoC (proof of concept), a little application with a frontend, a backend and a database, that you can orchestrate through these steps - a "movie-review" app.

## What are you going to learn?

Set up a CI/CD pipeline
Set up a static code analysis tool
Manage deployments from automated scripts

## Tasks

1. Create a frontend application, which fetches movies from a movie api, so that logged in users can see them, and write reviews. Create a backend application, where these reviews are persisted and they can be queried both by movie and by reviewer through a rest api.
    - Only a logged in user can write reviews.
    - Reviews can be searched by movies and by reviewer.
    - The api is responsive and well designed.

2. Connect Travis CI to the github repository, create quality assurance steps, build and push the frontend and backend services to dockerhub, so that at the end of the pipeline you can modify the deployment config sloppy's api, and make sure that the new version is automatically deployed.
    - Travis CI is connected to the repo.
    - The master branch is protected - no direct commits can alter it, only pull requests.
    - On every pull request, a code format check runs.
    - On every pull request, a unit and integration tests run. (optional)
    - On every pull request, a sonar analysis runs. (optional)
    - Thresholds for these quality assurance steps exist - merge should not be possible without them. (optional)
    - When the merge is possible, a docker images are created for both the frontend and the backend.
    - Images are pushed to a dockerhub repository.
    - When the merge is possible, and the images are pushed successfully the new version of the app should be redeployed through sloppy api.

## General requirements

- The project is deployed, and available to anyone.
- The team can showcase the process on the demo, where with one merge request a new version is deployed

## Hints

- The starting repository is empty on purpose.

- While most of the time we have a separate repository for every service, in this case, it is probably better to store them both in a single repository in two folders (frontend, backend)

- Start the project with an initial frontend and backend app, and then create the CI/CD pipeline asap. That way it won't be just an exercise, it will actually help your work.

## Background materials

- <i class="far fa-book-open"></i> [Movie API](https://www.themoviedb.org/documentation/api)
- <i class="far fa-video"></i> [CI/CD quickstart](https://www.youtube.com/watch?v=scEDHsr3APg)
- <i class="far fa-exclamation"></i> [About CI/CD](https://medium.com/@nirespire/what-is-cicd-concepts-in-continuous-integration-and-deployment-4fe3f6625007)
- <i class="far fa-book-open"></i> [Travis - getting started](https://travis-ci.com/getting_started)
- <i class="far fa-candy-cane"></i> [Prettier CLI](https://prettier.io/docs/en/cli.html)
- <i class="far fa-candy-cane"></i> [Sonarqube](https://docs.sonarqube.org/latest/)
- <i class="far fa-book-open"></i> [Sloppy API docs](https://apidocs.sloppy.io/)
