create TABLE documents(
    id   SERIAL PRIMARY KEY,
    title VARCHAR(255),
    date BIGINT
);

create TABLE specifications(
    id   SERIAL PRIMARY KEY,
    title VARCHAR(255),
    status VARCHAR(255),
    answer VARCHAR(255),
    document_id INTEGER,
    FOREIGN KEY (document_id) REFERENCES documents (id)
);