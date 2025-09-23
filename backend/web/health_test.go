package web

import (
	"testing"
)

func TestHealth(t *testing.T) {
	resp, err := Health()
	if err != nil {
		t.Fatalf("Health() failed: %v", err)
	}
	
	if resp.Status != "ok" {
		t.Errorf("expected status 'ok', got '%s'", resp.Status)
	}
}