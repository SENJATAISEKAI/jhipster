/**
 * Copyright 2013-2020 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const semver = require('semver');
const packagejs = require('../package.json');

// Version of Java
const JAVA_VERSION = '11'; // Java version is forced to be 11. We keep the variable as it might be useful in the future.

// Version of Node, NPM
const NODE_VERSION = '12.18.3';
const NPM_VERSION = '6.14.8';

const GRADLE_VERSION = '6.6';
const JIB_VERSION = '2.6.0';

// Libraries version
const JHIPSTER_DEPENDENCIES_VERSION = '3.10.0-SNAPSHOT';
// The spring-boot version should match the one managed by https://mvnrepository.com/artifact/io.github.jhipster/jhipster-dependencies/JHIPSTER_DEPENDENCIES_VERSION
const SPRING_BOOT_VERSION = '2.3.4.RELEASE';
const LIQUIBASE_VERSION = '3.10.2';
const liquibaseSemVer = semver.parse(LIQUIBASE_VERSION);
const LIQUIBASE_DTD_VERSION = `${liquibaseSemVer.major}.${liquibaseSemVer.minor}`;
const HIBERNATE_VERSION = '5.4.21.Final';

const JACOCO_VERSION = '0.8.5';
const KAFKA_VERSION = '5.5.1';
const JACKSON_DATABIND_NULLABLE_VERSION = '0.2.1';

// NPM packages version
const HUSKY_VERSION = '4.2.5';
// Not using the latest version because of https://github.com/jhipster/generator-jhipster/issues/11131
const LINT_STAGED_VERSION = '8.2.1';
// The installed prettier version should be the same that the one used during JHipster generation to avoid formatting differences
const PRETTIER_VERSION = packagejs.dependencies.prettier;
const PRETTIER_JAVA_VERSION = packagejs.dependencies['prettier-plugin-java'];

// Version of docker images
const DOCKER_JHIPSTER_REGISTRY = 'jhipster/jhipster-registry:v6.3.0';
const DOCKER_JHIPSTER_CONTROL_CENTER = 'jhipster/jhipster-control-center:v0.1.O';
const DOCKER_JAVA_JRE = 'adoptopenjdk:11-jre-hotspot';
const DOCKER_MYSQL = 'mysql:8.0.21';
const DOCKER_MARIADB = 'mariadb:10.5.5';
const DOCKER_POSTGRESQL = 'postgres:12.4';
const DOCKER_MONGODB = 'mongo:4.4.0';
const DOCKER_COUCHBASE = 'couchbase:6.6.0';
const DOCKER_CASSANDRA = 'cassandra:3.11.8';
const DOCKER_MSSQL = 'mcr.microsoft.com/mssql/server:2019-CU6-ubuntu-16.04';
const DOCKER_NEO4J = 'neo4j:4.1.1';
const DOCKER_HAZELCAST_MANAGEMENT_CENTER = 'hazelcast/management-center:4.0.3';
const DOCKER_MEMCACHED = 'memcached:1.6.6-alpine';
const DOCKER_REDIS = 'redis:6.0.7';
const DOCKER_KEYCLOAK = 'jboss/keycloak:11.0.1'; // The version should match the attribute 'keycloakVersion' from /docker-compose/templates/realm-config/jhipster-realm.json.ejs and /server/templates/src/main/docker/config/realm-config/jhipster-realm.json.ejs
const DOCKER_ELASTICSEARCH = 'docker.elastic.co/elasticsearch/elasticsearch:7.6.2'; // The version should be coherent with the one from spring-data-elasticsearch project
const DOCKER_KAFKA = `confluentinc/cp-kafka:${KAFKA_VERSION}`;
const DOCKER_ZOOKEEPER = `confluentinc/cp-zookeeper:${KAFKA_VERSION}`;
const DOCKER_SONAR = 'sonarqube:8.5.0-community';
const DOCKER_TRAEFIK = 'traefik:1.7.26'; // waiting for https://github.com/jhipster/generator-jhipster/issues/11198
const DOCKER_CONSUL = 'consul:1.8.4';
const DOCKER_CONSUL_CONFIG_LOADER = 'jhipster/consul-config-loader:v0.4.1';
const DOCKER_PROMETHEUS = 'prom/prometheus:v2.20.1';
const DOCKER_PROMETHEUS_ALERTMANAGER = 'prom/alertmanager:v0.21.0';
const DOCKER_GRAFANA = 'grafana/grafana:7.1.5';
const DOCKER_JENKINS = 'jenkins/jenkins:lts-jdk11';
const DOCKER_SWAGGER_EDITOR = 'swaggerapi/swagger-editor:latest';
const DOCKER_COMPOSE_FORMAT_VERSION = '3.8';
const DOCKER_PROMETHEUS_OPERATOR = 'quay.io/coreos/prometheus-operator:v0.41.1';
const DOCKER_GRAFANA_WATCHER = 'quay.io/coreos/grafana-watcher:v0.0.8';

// Kubernetes versions
const KUBERNETES_CORE_API_VERSION = 'v1';
const KUBERNETES_BATCH_API_VERSION = 'batch/v1';
const KUBERNETES_DEPLOYMENT_API_VERSION = 'apps/v1';
const KUBERNETES_STATEFULSET_API_VERSION = 'apps/v1';
const KUBERNETES_INGRESS_API_VERSION = 'networking.k8s.io/v1beta1';
const KUBERNETES_ISTIO_NETWORKING_API_VERSION = 'networking.istio.io/v1alpha3';
const KUBERNETES_RBAC_API_VERSION = 'rbac.authorization.k8s.io/v1';

// Helm versions
const HELM_KAFKA = '^0.20.1';
const HELM_ELASTICSEARCH = '^1.32.0';
const HELM_PROMETHEUS = '^9.2.0';
const HELM_GRAFANA = '^4.0.0';
const HELM_MYSQL = '^1.4.0';
const HELM_MARIADB = '^6.12.2';
const HELM_POSTGRESQL = '^6.5.3';
const HELM_MOGODB_REPLICASET = '^3.10.1';

// all constants used throughout all generators

const LOGIN_REGEX = '^(?>[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\\\.[a-zA-Z0-9-]+)*)|(?>[_.@A-Za-z0-9-]+)$';
// JS does not support atomic groups
const LOGIN_REGEX_JS = '^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$';

const MAIN_DIR = 'src/main/';
const TEST_DIR = 'src/test/';

// Note: this will be prepended with 'target/classes' for Maven, or with 'build/resources/main' for Gradle.
const CLIENT_DIST_DIR = 'static/';

const SUPPORTED_VALIDATION_RULES = ['required', 'unique', 'max', 'min', 'maxlength', 'minlength', 'maxbytes', 'minbytes', 'pattern'];

const SUPPORTED_CLIENT_FRAMEWORKS = {
    ANGULAR: 'angularX',
    REACT: 'react',
    VUE: 'vue',
};

// documentation constants
const JHIPSTER_DOCUMENTATION_URL = 'https://www.jhipster.tech';
const JHIPSTER_DOCUMENTATION_ARCHIVE_PATH = '/documentation-archive/';

const OFFICIAL_DATABASE_TYPE_NAMES = {
    cassandra: 'Cassandra',
    couchbase: 'Couchbase',
    mongodb: 'MongoDB',
    neo4j: 'Neo4j',
    sql: 'SQL',
};

const R2DBC_DB_OPTIONS = [
    {
        value: 'postgresql',
        name: 'PostgreSQL',
    },
    {
        value: 'mysql',
        name: 'MySQL',
    },
    {
        value: 'mariadb',
        name: 'MariaDB',
    },
    {
        value: 'mssql',
        name: 'Microsoft SQL Server',
    },
];

const SQL_DB_OPTIONS = [
    {
        value: 'postgresql',
        name: 'PostgreSQL',
    },
    {
        value: 'mysql',
        name: 'MySQL',
    },
    {
        value: 'mariadb',
        name: 'MariaDB',
    },
    {
        value: 'oracle',
        name: 'Oracle',
    },
    {
        value: 'mssql',
        name: 'Microsoft SQL Server',
    },
];

const LANGUAGES = [
    {
        name: 'Albanian',
        dispName: 'Shqip',
        value: 'al',
        momentLocaleId: 'sq',
        localeId: 'sq',
    },
    {
        name: 'Arabic (Libya)',
        dispName: '??????????????',
        value: 'ar-ly',
        rtl: true,
        skipForLocale: true,
        localeId: 'ar-LY',
    },
    {
        name: 'Armenian',
        dispName: '??????????????',
        value: 'hy',
        momentLocaleId: 'hy-am',
    },
    {
        name: 'Belarusian',
        dispName: '??????????????????',
        value: 'by',
        momentLocaleId: 'be-by',
        localeId: 'be',
    },
    {
        name: 'Bengali',
        dispName: '???????????????',
        value: 'bn',
        momentLocaleId: 'bn-bd',
    },
    { name: 'Bulgarian', dispName: '??????????????????', value: 'bg' },
    {
        name: 'Catalan',
        dispName: 'Catal??',
        value: 'ca',
    },
    {
        name: 'Chinese (Simplified)',
        dispName: '??????????????????',
        value: 'zh-cn',
        localeId: 'zh-Hans',
    },
    {
        name: 'Chinese (Traditional)',
        dispName: '????????????',
        value: 'zh-tw',
        localeId: 'zh-Hant',
    },
    { name: 'Croatian', dispName: 'Hrvatski', value: 'hr' },
    { name: 'Czech', dispName: '??esk??', value: 'cs' },
    { name: 'Danish', dispName: 'Dansk', value: 'da' },
    { name: 'Dutch', dispName: 'Nederlands', value: 'nl' },
    { name: 'English', dispName: 'English', value: 'en' },
    { name: 'Estonian', dispName: 'Eesti', value: 'et' },
    {
        name: 'Farsi',
        dispName: '??????????',
        value: 'fa',
        rtl: true,
    },
    { name: 'Finnish', dispName: 'Suomi', value: 'fi' },
    { name: 'French', dispName: 'Fran??ais', value: 'fr' },
    { name: 'Galician', dispName: 'Galego', value: 'gl' },
    { name: 'German', dispName: 'Deutsch', value: 'de' },
    { name: 'Greek', dispName: '????????????????', value: 'el' },
    { name: 'Hindi', dispName: '???????????????', value: 'hi' },
    { name: 'Hungarian', dispName: 'Magyar', value: 'hu' },
    {
        name: 'Indonesian',
        dispName: 'Bahasa Indonesia',
        /*
           To fix a nasty bug in the JDK ("Indonesian Locale does not comply with ISO 639")
           The locale is set to "in" for Indonesia
           See https://bugs.openjdk.java.net/browse/JDK-6457127
           And https://github.com/jhipster/generator-jhipster/issues/9494
        */
        value: 'in',
        localeId: 'id',
        momentLocaleId: 'id',
    },
    { name: 'Italian', dispName: 'Italiano', value: 'it' },
    { name: 'Japanese', dispName: '?????????', value: 'ja' },
    { name: 'Korean', dispName: '?????????', value: 'ko' },
    { name: 'Marathi', dispName: '???????????????', value: 'mr' },
    { name: 'Myanmar', dispName: '??????????????????', value: 'my' },
    { name: 'Polish', dispName: 'Polski', value: 'pl' },
    {
        name: 'Portuguese (Brazilian)',
        dispName: 'Portugu??s (Brasil)',
        value: 'pt-br',
        localeId: 'pt',
    },
    {
        name: 'Portuguese',
        dispName: 'Portugu??s',
        value: 'pt-pt',
        localeId: 'pt-PT',
    },
    { name: 'Romanian', dispName: 'Rom??n??', value: 'ro' },
    { name: 'Russian', dispName: '??????????????', value: 'ru' },
    { name: 'Slovak', dispName: 'Slovensk??', value: 'sk' },
    { name: 'Serbian', dispName: 'Srpski', value: 'sr' },
    { name: 'Sinhala', dispName: '???????????????', value: 'si' },
    { name: 'Spanish', dispName: 'Espa??ol', value: 'es' },
    { name: 'Swedish', dispName: 'Svenska', value: 'sv' },
    { name: 'Turkish', dispName: 'T??rk??e', value: 'tr' },
    { name: 'Tamil', dispName: '???????????????', value: 'ta' },
    { name: 'Telugu', dispName: '??????????????????', value: 'te' },
    { name: 'Thai', dispName: '?????????', value: 'th' },
    {
        name: 'Ukrainian',
        dispName: '????????????????????',
        value: 'ua',
        localeId: 'uk',
        momentLocaleId: 'uk',
    },
    {
        name: 'Uzbek (Cyrillic)',
        dispName: '??????????????',
        value: 'uz-Cyrl-uz',
        localeId: 'uz-Cyrl',
    },
    {
        name: 'Uzbek (Latin)',
        dispName: 'O`zbekcha',
        value: 'uz-Latn-uz',
        localeId: 'uz-Latn',
    },
    { name: 'Vietnamese', dispName: 'Ti???ng Vi???t', value: 'vi' },
];

const constants = {
    JHIPSTER_CONFIG_DIR: '.jhipster',
    INTERPOLATE_REGEX: /<%:([\s\S]+?)%>/g, // so that tags in templates do not get mistreated as _ templates
    DOCKER_DIR: `${MAIN_DIR}docker/`,
    LINE_LENGTH: 180,
    LANGUAGES,

    MAIN_DIR,
    TEST_DIR,

    LOGIN_REGEX,
    LOGIN_REGEX_JS,
    // supported client frameworks
    SUPPORTED_CLIENT_FRAMEWORKS,

    CLIENT_MAIN_SRC_DIR: `${MAIN_DIR}webapp/`,
    CLIENT_TEST_SRC_DIR: `${TEST_DIR}javascript/`,
    CLIENT_WEBPACK_DIR: 'webpack/',
    CLIENT_DIST_DIR,
    ANGULAR_DIR: `${MAIN_DIR}webapp/app/`,
    REACT_DIR: `${MAIN_DIR}webapp/app/`,
    VUE_DIR: `${MAIN_DIR}webapp/app/`,

    SERVER_MAIN_SRC_DIR: `${MAIN_DIR}java/`,
    SERVER_MAIN_RES_DIR: `${MAIN_DIR}resources/`,
    SERVER_TEST_SRC_DIR: `${TEST_DIR}java/`,
    SERVER_TEST_RES_DIR: `${TEST_DIR}resources/`,

    // server related
    OFFICIAL_DATABASE_TYPE_NAMES,

    // entity related
    SUPPORTED_VALIDATION_RULES,

    JHIPSTER_DOCUMENTATION_URL,
    JHIPSTER_DOCUMENTATION_ARCHIVE_PATH,

    DOCKER_JHIPSTER_REGISTRY,
    DOCKER_JHIPSTER_CONTROL_CENTER,
    DOCKER_JAVA_JRE,
    DOCKER_MYSQL,
    DOCKER_MARIADB,
    DOCKER_POSTGRESQL,
    DOCKER_MONGODB,
    DOCKER_COUCHBASE,
    DOCKER_CASSANDRA,
    DOCKER_MSSQL,
    DOCKER_NEO4J,
    DOCKER_HAZELCAST_MANAGEMENT_CENTER,
    DOCKER_MEMCACHED,
    DOCKER_REDIS,
    DOCKER_ELASTICSEARCH,
    DOCKER_KEYCLOAK,
    DOCKER_KAFKA,
    DOCKER_ZOOKEEPER,
    DOCKER_SONAR,
    DOCKER_TRAEFIK,
    DOCKER_CONSUL,
    DOCKER_CONSUL_CONFIG_LOADER,
    DOCKER_PROMETHEUS,
    DOCKER_PROMETHEUS_ALERTMANAGER,
    DOCKER_GRAFANA,
    JAVA_VERSION,
    NODE_VERSION,
    NPM_VERSION,
    KAFKA_VERSION,
    GRADLE_VERSION,

    // Libraries
    JIB_VERSION,
    JHIPSTER_DEPENDENCIES_VERSION,
    SPRING_BOOT_VERSION,
    LIQUIBASE_VERSION,
    LIQUIBASE_DTD_VERSION,
    HIBERNATE_VERSION,
    JACOCO_VERSION,
    JACKSON_DATABIND_NULLABLE_VERSION,

    // NPM
    HUSKY_VERSION,
    LINT_STAGED_VERSION,
    PRETTIER_VERSION,
    PRETTIER_JAVA_VERSION,

    DOCKER_JENKINS,
    DOCKER_SWAGGER_EDITOR,
    R2DBC_DB_OPTIONS,
    SQL_DB_OPTIONS,
    DOCKER_COMPOSE_FORMAT_VERSION,
    DOCKER_PROMETHEUS_OPERATOR,
    DOCKER_GRAFANA_WATCHER,
    KUBERNETES_CORE_API_VERSION,
    KUBERNETES_BATCH_API_VERSION,
    KUBERNETES_DEPLOYMENT_API_VERSION,
    KUBERNETES_STATEFULSET_API_VERSION,
    KUBERNETES_INGRESS_API_VERSION,
    KUBERNETES_ISTIO_NETWORKING_API_VERSION,
    KUBERNETES_RBAC_API_VERSION,

    HELM_KAFKA,
    HELM_ELASTICSEARCH,
    HELM_PROMETHEUS,
    HELM_GRAFANA,
    HELM_MYSQL,
    HELM_MARIADB,
    HELM_POSTGRESQL,
    HELM_MOGODB_REPLICASET,
};

module.exports = constants;
