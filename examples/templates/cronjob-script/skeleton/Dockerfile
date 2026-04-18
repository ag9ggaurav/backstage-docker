FROM ${{ values.image }}
WORKDIR /app
COPY script.sh .
RUN chmod +x script.sh
ENTRYPOINT ["/app/script.sh"]
