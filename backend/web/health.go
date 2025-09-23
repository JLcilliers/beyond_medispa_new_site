package web

import (
	"context"
)

type HealthResponse struct {
	Status string `json:"status"`
}

//encore:api public method=GET path=/health
func Health(ctx context.Context) (*HealthResponse, error) {
	return &HealthResponse{Status: "ok"}, nil
}