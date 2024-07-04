# Workshop :: Monitoring for Kong (DB-less)
* Metric => Prometheus
* Trace => Jaeger/Tempo
* Log => Loki


## 1. Start Kong with DB-less
```
$docker compose up -d kong
$docker compose ps
NAME      IMAGE               COMMAND                  SERVICE   CREATED          STATUS                    PORTS
kong      kong:3.7.1-ubuntu   "/docker-entrypoint.…"   kong      12 seconds ago   Up 11 seconds (healthy)   0.0.0.0:8000-8002->8000-8002/tcp, 8443-8444/tcp
```

List of urls
* Kong manager :: http://localhost:8002
* Routes
  * http://localhost:8000/s1/users
  * http://localhost:8000/s2

## 2. Start Opentelemetry collector
```
$docker compose up -d otel-collector
$docker compose ps
```

## 3. Start Prometheus (Metric)
* Kong
* Opentelemetry collector

```
$docker compose up -d prometheus
$docker compose ps
```

Access to prometheus dashboard :: http://localhost:9090
* Goto menu Status => Targets

## 4. Start Grafana to show data in dashboard
```
$docker compose up -d grafana
$docker compose ps
```

Access to grafana dashboard :: http://localhost:3000
* Goto menu Home => Dashboards

## 5. Start Jaeger (Tracing)
```
$docker compose up -d jaeger
$docker compose ps
```

Access to jaeger dashboard :: http://localhost:16686

### Start demo app :: [Hot R.O.D. - Rides on Demand](https://github.com/jaegertracing/jaeger/tree/main/examples/hotrod)
```
$docker compose up -d hotrod
$docker compose ps
```
Access to service with url :: http://localhost:8000/s2

## 6. Start Loki (Logging)
* Store logs from Kong
  * http log plugin => send to Fluentbit

```
$docker compose up -d loki
$docker compose ps
```

Start Fluentbit
```
$docker compose up -d fluentbit
$docker compose ps
```

Search log in Grafana
* http://localhost:3000/explore
