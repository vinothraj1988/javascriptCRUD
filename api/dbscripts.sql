create database demo;

use demo;
-- Table structure for users
  CREATE TABLE IF NOT EXISTS users (
    id int(11) NOT NULL,
    name varchar(200) NOT NULL,
    email varchar(200) NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
  ALTER TABLE users ADD PRIMARY KEY (id);
  ALTER TABLE users MODIFY id int(11) NOT NULL AUTO_INCREMENT;


  -- Adding Dummy data
  INSERT INTO users (id, name, email, created_at) VALUES
  (1, 'Test', 'test@g.co', '2019-02-28 13:20:20');
  INSERT INTO users (id, name, email, created_at) VALUES
  (2, 'john', 'john@g.co', '2019-02-28 13:20:20');
  INSERT INTO users (id, name, email, created_at) VALUES
  (3, 'tutsmake', 'tuts@g.co', '2019-02-28 13:20:20');
  INSERT INTO users (id, name, email, created_at) VALUES
  (4, 'tut', 'tut@g.co', '2019-02-28 13:20:20');


    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Tech@123';
  flush privileges;