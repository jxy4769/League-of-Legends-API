package com.leagueoflegendsapi;

import java.io.InputStream;
import java.util.Objects;
import java.util.logging.LogManager;
import java.util.logging.Logger;

import com.google.gson.Gson;
import com.leagueoflegendsapi.ui.WebServer;

import spark.TemplateEngine;
import spark.template.freemarker.FreeMarkerEngine;


public final class Application {
  private static final Logger LOG = Logger.getLogger(Application.class.getName());

  public static void main(String[] args) {

    try {
      ClassLoader classLoader = Application.class.getClassLoader();
      final InputStream logConfig = classLoader.getResourceAsStream("log.properties");
      LogManager.getLogManager().readConfiguration(logConfig);
    } catch (Exception e) {
      e.printStackTrace();
      System.err.println("Could not initialize log manager because: " + e.getMessage());
    }


    final TemplateEngine templateEngine = new FreeMarkerEngine();


    final PlayerLobby playerlobby = new PlayerLobby();


    final Gson gson = new Gson();


    final WebServer webServer = new WebServer(playerlobby, templateEngine, gson);


    final Application app = new Application(webServer);


    app.initialize();
  }

  //
  // Attributes
  //

  private final WebServer webServer;

  //
  // Constructor
  //

  private Application(final WebServer webServer) {
    // validation
    Objects.requireNonNull(webServer, "webServer must not be null");
    //
    this.webServer = webServer;
  }

  //
  // Private methods
  //

  private void initialize() {
    LOG.config("LOL API is initializing.");

    // configure Spark and startup the Jetty web server
    webServer.initialize();

    // other applications might have additional services to configure

    LOG.config("LOL API initialization complete.");
  }

}