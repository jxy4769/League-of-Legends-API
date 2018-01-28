  package com.leagueoflegendsapi;

import java.io.InputStream;
import java.util.logging.LogManager;
import java.util.logging.Logger;

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

    final Application app = new Application();


    app.initialize();
  }


  private Application() {
  }

  private void initialize() {
    LOG.config("LOL API is initializing.");

    LOG.config("LOL API initialization complete.");
  }

}