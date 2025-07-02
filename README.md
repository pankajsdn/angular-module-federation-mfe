## Sample: Micro-frontend portal using Angular and Module Federation

This is a sample code demonstrating an Angular micro-frontend portal using Module Federation. The repository contains two folders for two distinct applications: the shell app and a sample feature app. These applications must be installed and run separately.

Once both applications are running concurrently, they seamlessly integrate to form a unified portal. The shell app serves as the main entry point and orchestrates the integration of the feature app, enabling a cohesive and modular architecture.

By leveraging Module Federation, this sample code showcases the ability to share and compose modules across different applications, facilitating efficient development, maintenance, and deployment of micro-frontends within an Angular ecosystem.

## Running with Docker

You can also run the entire application using Docker Compose. This will build and run both the `shell-app` and `feature1-app` in their respective containers.

1.  **Ensure Docker and Docker Compose are installed.**
2.  **Build and run the applications:**
    ```bash
    docker-compose up --build
    ```
    The `--build` flag is only necessary the first time you run the command, or if you've made changes to the Dockerfiles or application code.
3.  **Access the applications:**
    *   Shell App: `http://localhost:4200`
    *   Feature1 App: `http://localhost:5000` (though typically you'll access it via the shell app)

To stop the applications, press `Ctrl+C` in the terminal where `docker-compose up` is running, and then run:
```bash
docker-compose down
```

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

